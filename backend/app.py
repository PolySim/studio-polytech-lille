import mysql.connector
import flask
from flask import Flask, request, send_file, render_template
import json

application = Flask(__name__)

# test connection
@application.route('/hello')
def helloWorld():
    return "Hello World"

# Send Image with his get in params
@application.route('/getImage/<num>')
def sendImage(num=None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT album_id, extension FROM Photo WHERE id = %s"
        cursor.execute(request, (num,))
        result = cursor.fetchall()
        return send_file('web/album/' + str(result[0][0]) + '/' + num + '.' + str(result[0][1]))
        
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

# Send studio team information            
def sqlRequestToDict_Members(sqlResult):
    rank = {
        1: 'Président',
        2: 'Vice-président',
        3: 'Secrétaire',
        4: 'Trésorier',
        5: 'Membre',
        6: 'Secreétaire / Trésorier',
        7: 'Secrétaire / Respo com',
        8: 'Respo formations',
        9: 'Respo photo de classe',
        10: 'Respo vidéo',
        11: 'Respo photo',
        12: 'Respo RDD',
        13: 'Respo partenariats',
        14: 'Secrétaire / Respo com / Respo photo',
        15: 'Respo Event',
        16: 'Respo Event / Respo technique'
    }
    result = {}
    for person in sqlResult:
        if str(person[4]) in result:
            result[str(person[4])].append({
                'id' : person[0],
                'rank': rank[person[1]],
                'lastName': person[2],
                'firstName': person[3],
                'subject': person[5],
                'extension': person[6]})
        else:
            result[str(person[4])] = [{
                'id' : person[0],
                'rank': rank[person[1]],
                'lastName': person[2],
                'firstName': person[3],
                'subject': person[5],
                'extension': person[6]}]     
    return result       

@application.route('/infoTeam')
def getTeamInfo():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT * FROM Member ORDER BY year"
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToDict_Members(result))
        
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            
# Send picture of studio member
@application.route('/imageTeam/<id>/<extension>')
def getImageTeam(id=None, extension=None):
    try:
        return send_file('web/member/' + str(id) + '.' + extension)
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response
    
#