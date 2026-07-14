Open your browser and navigate to http://localhost:8000 to begin triaging.

How It Works: Walkthrough
1. Pick an Alert: Select any pending reports from the Logs Panel.
2. Inspect the Artifacts:
	- Analyze the source user, host machine, and IP addresses.
	- Look up indicators of compromise (IOCs) using simulated Threat Intelligence modules.
	- Examine process executions, command-line arguments, or network connection states.
3. Investigate: Ask yourself key questions:
	- Is this command standard for this specific user or department?
	- Does the external IP address have a poor reputation score?
	- Is the timestamp indicative of anomalous off-hours activity?
4. Make Your Decision: Click True Positive if you find malicious intent, or False Positive if it's authorized business activity, testing, or misconfigured software.

Built With:
Frontend: HTML5, CSS
Backend : Javascript, Bash, NodeJS

Contributions are highly encouraged!
The project is still on alpha version. We will provide more updates in the future.

License:
MIT

REQUIREMENTS:
bash 5.3.0
python3
nodejs

Front-end server is hosted on localhost:8000 (That's where you should go).
Back-end server is hosted on localhost:3000  (Ignore this).

In order to start these 2 servers, type the following commands:
./init_server.sh
node server.js

[! IMPORTANT !] Please, make sure the project is saved on the $HOME directory. [! IMPORTANT !]
