import soundcloud

client = soundcloud.Client(client_id='e4d56342b514a03135c3c3325e926582', client_secret='ff89b2c3fbf99ed43120ec0f6c80c23d')

# 75160273
# 69653062
track = client.get('/tracks/69653062')
stream_url = client.get(track.stream_url, allow_redirects=False)

print stream_url.location
