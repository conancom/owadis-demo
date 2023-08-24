const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors'); // Import the cors module
const port = 3000

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const { Username, password } = req.body;
  
    if (Username && password) {
      if(containsSubstring(Username, openredirect) || containsSubstring(password, openredirect)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`Open Redirect Attack detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }

      if(containsSubstring(Username, rfilfi) || containsSubstring(password, rfilfi)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`RFI/LFI detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }

      if(containsSubstring(Username, cmdinjection) || containsSubstring(password, cmdinjection)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`OS injection detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }

      if(containsSubstring(Username, sqli) || containsSubstring(password, sqli)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`SQL injection detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }

      if(containsSubstring(Username, xss) || containsSubstring(password, xss)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`Cross-Site Scripting detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }

      if(containsSubstring(Username, xee) || containsSubstring(password, xee)){
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
        console.log(`ip:${ip}, user-identifier:UD11, name:frank, time-stamp:[${new Date()}], header:"GET /?username=${Username}&password=${password} HTTP/1.0", status:200`);
        console.log(`XML external entity attack detected by: ip:${ip}`);
        return res.status(203).json({ message: 'Attacked' });
      }
      
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function containsSubstring(stringToCheck, substringList) {
  for (const substring of substringList) {
    if (stringToCheck.includes(substring)) {
      return true; // Return true if a match is found
    }
  }
  return false; // Return false if no match is found
}

const substrings = ["test"];

const openredirect = ["body", "/body", "object", "/object", "script", "/script", "</", "/>", "<b", "<p", "p>", "<q", "q>", "b>", "<input", "input>", "xml", "php?", "/redir", "jspa?", "<XSS", "XSS>", "xss", "<Malware", "Malware>", "location=\\\\\'\\\'", "b=\\\'URL(\\\\\'\\\';')", "c=\\\'javascript;\\\'", "p=goodexample", "q=badexample"]

const rfilfi = ["<a",
    "http:",
    "$ _GET",
    " passthru ",
    "passthru(",
    "passthru (",
    "htmlspecialchars (",
    "htmlentities (",
    "stripslashes (",
    "cleanAll (",
    "strip_tags (",
    "chop (",
    "chop(",
    "htmlentities(",
    "stripslashes(",
    "cleanAll(",
    "strip_tags(",
    "str_replace(",
    "str_replace (",
    "/issue",
    "/passwd",
    "/shadow",
    "/group",
    "/hosts",
    "/motd",
    "/mysql/my.cnf",
    "/my.cnf",
    "/proc/self/environ",
    "/proc/version",
    "proc/cmdline",
    "/fd/",
    "shell.txt",
    ".zip",
    "$_GET",
    ":expect:",
    ";base64",
    "<a",
    "</a",
    "[cmd]",
    "string.rot13",]

const cmdinjection = ["curl", "echo", "netstat", "whoami", "ping", ".pl", "-an", "29", "&", "&&", "|", "||", "(", ")", ";", ".", "?", ">", "/", "0x0a", "\\n", "$", "nslookup", "ipconfig", "<a", "</a", "<b", "b>", ".pl", "-a", "-an", "-s", "-c", "<body", "body>", "<object", "object>", "script", "/script", "<input", "input>", "xml", "<OS", "OS>", "'whoami'", "/var/www/static/", "a=\\\'get\\\';", "b=\\\'URL(\\\\\'\\\';'", "c=\\\'javascript;\\\\"]

const sqli = [" char( "," int( ","distinct","cast(","union","column","column_name",
"table","table_name","table_schema","concat","convert","benchmark","count(","generate_series","information_schema",
"schemata","login_test","tb_login","iif(","mid(","make_set","json_keys","elt(","sleep(",
"procedure","analyse","extractvalue","MD5","null","%","(",")","\\","#","+", " or ", "||",
"1=1"," AND "," OR ","- ","<",">","*"]

const xss = ["<img", "img>", "<image", "image>", "<audio", "audio>",
"<video", "video>", "<body", "body>", "<object", "object>", "<script", "script>", "<svg", "svg>",
"<title", "title>", "<iframe", "iframe>", "<frameset", "frameset>", "<html", "html>", "<bgsound",
"<style", "style>", "<applet", "applet>", "<marquee", "marquee>", "<xml", "xml>", "--><!--",
"<!--\\x3E<img", "`/\"'><img", "<a", "</a", "<script>/*", "\"'`>ABC<div", "ABC<div",
"<input", "input>", "<form", "form>", "<math", "math>", "<table", "table>", "<li", "li>", "<embed",
"embed>", "<b", "<div", "div>", "<x",
"<!", "<?", "</", "<%", "<link", "link>", "<style>@import", "<//", "<meta", "meta>",
"<vmlframe", "<event-source", "<FRAMESET><FRAME", "<BR", "BR>", "<LAYER", "LAYER>", "<XSS", "XSS>",
"<STYLE>li", "<!--[if", "<BASE", "<P", "<?xml", "<SCRIPT/XSS", "<form><textarea",
"<var", "var>", "<TD", "TD>", "&lt;DIV", "<;IMG", "<;SCRIPT", "<;BASE", "<;STYLE",
"<;DIV", "<;HTML", "<;BODY", "<;BGSOUND", "<;IFRAME", "<;INPUT", "<;TABLE", "<;XML", "<;?",
"<;BR", "<;XSS", "<;META", "<;A", "\"-prompt(8)-\"", "'-prompt(8)-'", "\";a=prompt,a()//",
"';a=prompt,a()//", "'-eval", "\"-eval", "\"onclick=prompt(8)", "script%",
"src=xxx:x", "&lt;", "XSS", "xss", "&#x", "(88,83,83)", "<menu ", "menu>",
"‘; alert(1);", "‘)alert(1);//", "<keygen ", "keygen>", "alert(",
"a=\\\"get\\\";", "b=\\\"URL(\\\\\"\\\";", "c=\\\"javascript&#058;\\\""]

const xee = ["<!--?xml",
"<?xml",
"<svg xmlns",
"<!ENTITY",
"<!DOCTYPE",
"<userInfo>",
"<!ELEMENT",
"<lolz>",
"<![CDATA",
"<soap:",
".xml",
"<svg",
"svg>",]

//Template for Request Logging

{/* <Request Template> ip:127.0.0.1, user-identifier:UD11, name:frank, time-stamp:[10/Oct/2000:13:55:36 -0700], header:"GET /?id=message&password=message2 HTTP/1.0", status:200 */}
