import mysql.connector
import flask
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import json

application = Flask(__name__)
CORS(application, supports_credentials=True)

# test connection
@application.route('/hello')
def helloWorld():
    return "Hello World"

# Send Image with his id get in params
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
        if person[4] in result:
            result[person[4]].append({
                'id' : person[0],
                'rank': rank[person[1]],
                'lastName': person[2],
                'firstName': person[3],
                'subject': person[5],
                'extension': person[6]})
        else:
            result[person[4]] = [{
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
    
# Send Album information
def sqlRequestToDict_Album(sqlResult):
    result = {}
    for album in sqlResult:
        if album[4] == '9':
            
            if str(album[3]) in result:
                result[str(album[3])].append({
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                })
            else:
                result[str(album[3])] = [{
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                }]
                
            if str(int(album[3]) + 1) in result:
                result[str(int(album[3]) + 1)].append({
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                })
            else:
                result[str(int(album[3]) + 1)] = [{
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                }]
                
        elif int(album[4]) < 9:
            if str(album[3]) in result:
                result[str(album[3])].append({
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                })
            else:
                result[str(album[3])] = [{
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                }]
        else:
            if str(int(album[3]) + 1) in result:
                result[str(int(album[3]) + 1)].append({
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                })
            else:
                result[str(int(album[3]) + 1)] = [{
                    'id' : album[0],
                    'cover_id' : album[1],
                    'title' : album[2]
                }]
    return result
            
@application.route('/albumInformation')
def getAlbumInformation():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT id, cover_id, title, YEAR(date), MONTH(date) FROM Album WHERE published = 1;"
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToDict_Album(result))
        
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
            
# Send list Images from one album
def sqlRequestToList_AlbumImage(sqlResult):
    result = []
    for image in sqlResult:
        result.append({
            'id' : image[0],
            'secure': image[1]
        })
    return result

@application.route('/albumImage/<id>')
def getAlbumImages(id:None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT id, secure FROM Photo WHERE album_id = %s;"
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        requestTitleView = "SELECT title, SUM(nbViews) FROM Album JOIN Photo ON Album.id = Photo.album_id WHERE Album.id = %s;"
        cursor.execute(requestTitleView, (id,))
        resultTitleView = cursor.fetchall()
        return flask.jsonify({
            'album' : resultTitleView[0],
            'images': sqlRequestToList_AlbumImage(result)
        })
        
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

#Send PAF information
def sqlRequestToList_PafInfo(sqlResult):
    result = []
    for article in sqlResult:
        result.append({
            'id': article[5],
            'name': article[0],
            'date': str(article[1]) + '/' + str(article[2]) + '/' + str(article[3]),
            'extension': str(article[4])
        })
    return result

@application.route('/pafInfo')
def getInfoPAF():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT name, DAY(date),MONTH(date),YEAR(date), extensionImage, id FROM Journal ORDER BY date DESC"
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToList_PafInfo(result))
        
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
            
#Send PAF Image
@application.route('/pafImage/<id>/<extension>')
def getPafImage(id:None, extension:None):
    return send_file('web/img/PAF/' + id + '.' + extension)