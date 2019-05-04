const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            console.log('hello')
            const Nexmo = require('nexmo');
		    const nexmo = new Nexmo({
		      apiKey: '41043bbb',
		      apiSecret: 'ZpmZMYYBA7WbI1ln'
		    });


		    nexmo.message.sendSms(
		     '18062055196', result.phone_number, ':O 0:',
		      (err, responseData) => {
		        if (err) {
		          console.log(err);
		        } else {
		          console.dir(responseData);
		        }
		      }
		    );
			
            res.end(`Phone number: ${result.phone_number} successfully texted`);




        });
    } 
    else {
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    <input type="text" name="phone_number" /><br />
                    <input type="number" name="age" /><br />
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(3000);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}
