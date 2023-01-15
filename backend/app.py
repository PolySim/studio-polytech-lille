import mysql.connector
import flask
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import json
from Crypto.Util.Padding import unpad
from Crypto.Cipher import AES
import base64
import os

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
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
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
                'id': person[0],
                'rank': rank[person[1]],
                'lastName': person[2],
                'firstName': person[3],
                'subject': person[5],
                'extension': person[6]})
        else:
            result[person[4]] = [{
                'id': person[0],
                'rank': rank[person[1]],
                'lastName': person[2],
                'firstName': person[3],
                'subject': person[5],
                'extension': person[6]}]
    return result


@application.route('/infoTeam')
def getTeamInfo():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
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
        if album[4] == '8':

            if str(album[3]) in result:
                result[str(album[3])].append({
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                })
            else:
                result[str(album[3])] = [{
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                }]

            if str(int(album[3]) + 1) in result:
                result[str(int(album[3]) + 1)].append({
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                })
            else:
                result[str(int(album[3]) + 1)] = [{
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                }]

        elif int(album[4]) < 8:
            if str(album[3]) in result:
                result[str(album[3])].append({
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                })
            else:
                result[str(album[3])] = [{
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                }]
        else:
            if str(int(album[3]) + 1) in result:
                result[str(int(album[3]) + 1)].append({
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                })
            else:
                result[str(int(album[3]) + 1)] = [{
                    'id': album[0],
                    'cover_id': album[1],
                    'title': album[2]
                }]
    return result


@application.route('/albumInformation')
def getAlbumInformation():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
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
            'id': image[0],
            'secure': image[1]
        })
    return result


@application.route('/albumImage/<id>')
def getAlbumImages(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT id, secure FROM Photo WHERE album_id = %s;"
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        requestTitleView = "SELECT title, SUM(nbViews) FROM Album JOIN Photo ON Album.id = Photo.album_id WHERE Album.id = %s;"
        cursor.execute(requestTitleView, (id,))
        resultTitleView = cursor.fetchall()
        return flask.jsonify({
            'album': resultTitleView[0],
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


# Send PAF information
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
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
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


# Send PAF Image
@application.route('/pafImage/<id>/<extension>')
def getPafImage(id: None, extension: None):
    return send_file('web/img/PAF/' + id + '.' + extension)


# Send PAF information for One article
@application.route('/pafArticleInfo/<id>')
def getArticleInfoPaf(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT name, views, extensionFile FROM Journal WHERE id = %s"
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        return flask.jsonify({
            'name': result[0][0],
            'views': result[0][1],
            'extension': result[0][2]
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


# Send PAF Article
@application.route('/pafArticle/<id>/<extension>')
def getArticlePaf(id: None, extension: None):
    return send_file('web/file/PAF/' + id + '.' + extension)


# Send Video Category information
def sqlRequestToList_VideoCategory(sqlResult):
    result = []
    for category in sqlResult:
        result.append({
            'id': category[0],
            'name': category[1],
            'position': category[2]
        })
    return result


@application.route('/videoCategory')
def getVideoCategories():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """SELECT id, name, position
        FROM VideoCategory
        ORDER BY position;"""
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToList_VideoCategory(result))

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


# Send ALL years where there are videos
def sqlRequestToList_VideoYear(sqlResult):
    result = []
    for year in sqlResult:
        if year[0] < 9:
            if not year[1] - 1 in result:
                result.append(year[1] - 1)
        else:
            if not year[1] in result:
                result.append(year[1])
    return result


@application.route('/yearsVideo')
def getYearsVideo():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT DISTINCT MONTH(date), YEAR(date)
        FROM Video
        ORDER BY YEAR(date) DESC;
        """
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToList_VideoYear(result))

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


# Send Video Information
def sqlRequestToDict_VideoInfo(sqlResult):
    result = {}
    for video in sqlResult:
        if video[5] < 9:
            if str(video[6] - 1) in result:
                result[str(video[6] - 1)].append({
                    'id': video[0],
                    'category_id': video[1],
                    'title': video[2],
                    'extension': video[3],
                    'secure': video[4]
                })
            else:
                result[str(video[6] - 1)] = [{
                    'id': video[0],
                    'category_id': video[1],
                    'title': video[2],
                    'extension': video[3],
                    'secure': video[4]
                }]
        else:
            if str(video[6]) in result:
                result[str(video[6])].append({
                    'id': video[0],
                    'category_id': video[1],
                    'title': video[2],
                    'extension': video[3],
                    'secure': video[4]
                })
            else:
                result[str(video[6])] = [{
                    'id': video[0],
                    'category_id': video[1],
                    'title': video[2],
                    'extension': video[3],
                    'secure': video[4]
                }]
    return result


@application.route('/videoInfo')
def getVideoInfo():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT id, category_id, title, extension, secure, MONTH(date), YEAR(date)
        FROM Video;
        """
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToDict_VideoInfo(result))

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


# Send Video Image
@application.route('/videoImage/<id>/<extension>')
def getVideoImage(id: None, extension: None):
    return send_file('web/img/video/' + id + '.' + extension)


# Send Video Link
def sqlRequestToDict_VideoLink(sqlResult):
    result = {}
    for link in sqlResult:
        if result == {}:
            result = {
                'extension': link[0],
                'title': link[1],
                'nbViews': link[2],
                'link': [link[3]]
            }
        else:
            result['link'].append(link[3])
    return result


@application.route('/videoLink/<id>')
def getVideoLink(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT extension, title, nbViews, link
        FROM Video
        JOIN VideoLink ON Video.id = VideoLink.video_id
        WHERE Video.id = %s;
        """
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToDict_VideoLink(result))
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


# Send News Info
def wordWithoutStyle(text):
    count = 0
    word = ""
    for letter in text:
        if letter == '[':
            count += 1
        elif letter == ']':
            count -= 1
        else:
            if count == 0:
                word += letter
    return word


def sqlRequestToList_NewsInfo(sqlResult):
    result = []
    for news in sqlResult:
        textList = news[3][:430].split(" ")
        textList.pop()
        text = ""
        for word in textList:
            if '[' in word or ']' in word:
                text += wordWithoutStyle(word) + ' '
            else:
                text += word + ' '
        result.append({
            'id': news[0],
            'extension': news[1],
            'title': news[2],
            'text': text + '...'
        })
    return result


# Send News Information
@application.route('/newsInfo')
def getNewsInfo():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT id, extension, title, text
        FROM News
        ORDER BY date DESC;
        """
        cursor.execute(request)
        result = cursor.fetchall()
        return flask.jsonify(sqlRequestToList_NewsInfo(result))
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


@application.route('/newsImage/<id>/<extension>')
def getNewsImage(id: None, extension: None):
    return send_file('web/img/news/' + id + '.' + extension)


# Send News
@application.route('/newsText/<id>')
def getNewsText(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT text
        FROM News
        WHERE id = %s;
        """
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        return result
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


# Send Connection Information and Decrypt username           
@application.route('/getUsername/<iv>')
def getUsername(iv: None):
    u = request.args.get('u')
    username = ''
    for letter in u:
        if letter == ' ':
            username += '+'
        else:
            username += letter
    ciphertext = base64.b64decode(username)

    key = b'KQbcXhLfTiTi_EOo7yy87%YTz7Ll6YZ0'
    cipher = AES.new(key, AES.MODE_CBC, bytes(iv, 'utf-8'))
    decrypted = unpad(cipher.decrypt(ciphertext), 16)

    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        SQLrequest = """
        SELECT group_id
        FROM studio_user
        LEFT JOIN user_user_group ON studio_user.id = user_user_group.user_id
        WHERE username = %s;
        """
        cursor.execute(SQLrequest, (decrypted.decode(),))
        result = cursor.fetchall()
        if result[0][0] == None:
            return flask.jsonify({'group': 0})
        else:
            return flask.jsonify({'group': result[0][0]})
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


# Get Album Information for edit
@application.route('/admin/albumInfo/<id>')
def getAdminAlbumInfo(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT id, cover_id, title, YEAR(date), MONTH(date), DAY(date)
        FROM Album
        WHERE id = %s;
        """
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        if result[0][4] < 10:
            if result[0][5] < 10:
                return {
                    'id': result[0][0],
                    'cover_id': result[0][1],
                    'title': result[0][2],
                    'date': str(result[0][3]) + '-0' + str(result[0][4]) + '-0' + str(result[0][5])
                }
            else:
                return {
                    'id': result[0][0],
                    'cover_id': result[0][1],
                    'title': result[0][2],
                    'date': str(result[0][3]) + '-0' + str(result[0][4]) + '-' + str(result[0][5])
                }
        else:
            if result[0][5] < 10:
                return {
                    'id': result[0][0],
                    'cover_id': result[0][1],
                    'title': result[0][2],
                    'date': str(result[0][3]) + '-' + str(result[0][4]) + '-0' + str(result[0][5])
                }
            return {
                'id': result[0][0],
                'cover_id': result[0][1],
                'title': result[0][2],
                'date': str(result[0][3]) + '-' + str(result[0][4]) + '-' + str(result[0][5])
            }
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


# Update Cover 
@application.route('/updateCoverId/<id>/<cover>')
def updateCoverId(id: None, cover: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        UPDATE Album
        SET cover_id = %s
        WHERE id = %s;
        """
        cursor.execute(request, (cover, id))
        connection.commit()
        return "Update finish"
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


# Update Secure
@application.route('/updateSecure/<id>/<secure>')
def updateSecure(id: None, secure: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        UPDATE Photo
        SET secure = %s
        WHERE id = %s;
        """
        cursor.execute(request, (secure, id))
        connection.commit()
        return "Update finish"
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


# Upload Image        
@application.route('/uploadImage/<id>', methods=['POST'])
def uploadImage(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        SQLrequest = """
        SELECT MAX(id)
        FROM Photo;
        """
        cursor.execute(SQLrequest)
        id_max = cursor.fetchall()[0][0]
        image_files = request.files.getlist('images')
        if image_files:
            indice = 1
            for image_file in image_files:
                extension = image_file.filename.split('.')[-1]
                image_file.save(os.path.join('web/album/' + id, str(id_max + indice) + '.' + extension))
                SQLrequest = """
                INSERT INTO Photo (id, album_id, secure, nbViews, extension, date) 
                VALUES (%s, %s, 1, 0, %s, '2022-01-01')
                """
                cursor.execute(SQLrequest, (id_max + indice, id, extension))
                connection.commit()
                indice += 1
        return flask.jsonify({'message': 'Images téléchargées avec'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


# Remove Image
@application.route('/removeImage/<id>')
def removeImage(id: None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT album_id, extension FROM Photo WHERE id = %s"
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        try:
            request = "DELETE FROM Photo WHERE id= %s"
            cursor.execute(request, (id,))
            connection.commit()
            os.remove(os.path.join('web/album/' + str(result[0][0]), id + '.' + result[0][1]))
            return 'Image supprimée avec succès!'
        except FileNotFoundError:
            return 'Image introuvable.'
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


# Create Album
@application.route('/createAlbum/<id>/<create>')
def createAlbum(id: None, create: None):
    try:
        title = request.args.get('title')
        date = request.args.get('date')
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        if create == '0':
            SQLrequest = """
            INSERT INTO Album (id, cover_id, title, date, sended, published) 
            VALUES (%s, 1, %s, %s, 1, 1)
            """
            cursor.execute(SQLrequest, (id, title, date))
            if not os.path.exists('web/album/' + id):
                os.makedirs('web/album/' + id)
        else:
            SQLrequest = """
            UPDATE Album SET title = %s, date = %s WHERE id = %s
            """
            cursor.execute(SQLrequest, (title, date, id))
        connection.commit()
        return "Album Create"
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


# Send MAX album_id
@application.route('/maxAlbumId')
def maxAlbumId():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='studio_prod', user='root',
                                             password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT MAX(id)
        FROM Album;
        """
        cursor.execute(request)
        result = cursor.fetchall()
        return [result[0][0]]
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
