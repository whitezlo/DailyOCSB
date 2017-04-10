# Daily OCSB login
Ottawa Catholic School Board requires students to login into D2L portal 5 days a week. With this browser automation, students are able to set-up automatic login on daily basis.

1. Install [Nightwatch](http://nightwatchjs.org/gettingstarted#installation)
2. Set-up your password and login [/test/login.js]
3. Go to the project root folder and run:
```sh
$ nightwatch
```
4. Set-up crontab for daily automatic login. 
Run
```sh 
$ crontab -e
```
and insert following line:
```sh 
30 8 * * * cd ~/root-folder-of-this-repo && nightwatch
```
