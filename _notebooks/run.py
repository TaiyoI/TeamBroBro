server = 'https://flask.nighthawkcodingsociety.com/' # run from web server
url = server + "api/jokes/"
responses = []  # Responses list
import requests
import random

# Get the count of jokes on server
count_response = requests.get(url+"count")
count_json = count_response.json()
count = count_json['count']

# Update likes/dislikes test sequence using random joke
num = str(random.randint(0, count-1)) # Test a random record
responses.append(
    requests.get(url+num)  # Get/read joke by id
    ) 
responses.append(
    requests.put(url+"like/"+num) # Put/add to like count
    ) 
responses.append(
    requests.put(url+"jeer/"+num) # Put/add to jeer count
    ) 

# Get a random joke
responses.append(
    requests.get(url+"random")  # Get/read a random joke
    ) 

# Cycle through and print responses
for response in responses:
    print(response)
    try:
        print(response.json())
    except:
        print("data error")