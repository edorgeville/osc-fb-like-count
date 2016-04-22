# OSC FB Like Count
## Sends the like count of a FB page through OSC

### Getting ready

```
git clone git@github.com:th3m4ri0/osc-fb-like-count
cd osc-fb-like-count
touch .env
npm install
``` 

Then, edit the `.env` file and add the following content :
```
FB_APP_ID=yourappid
FB_APP_SECRET=yourappsecret
FB_ID=github
OSC_PORT=1234
INTERVAL=5000
``` 

### Using 

```
npm start
``` 