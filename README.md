## Dumph - Dump Phabricator tasks in a spreadsheet or HTML file

Dumph grabs a tree of tasks from your Phabricator instance and puts them in a CSV spreadsheet or in a HTML file.

Just define and run a query on Phabricator and copy the query id from the result page passing it to Dumph.

## How to use it

    $ # run a query on Phab and grap its id or use one of the predefined ones
    $ QUERY_ID=open
    $ dumph "$QUERY_ID" --output-format=html > results.html

## Why

Over time we grew some scripts to grab info from Phab, paying particular attention to parent/child relations.
Surely extending Phabricator would have been a better choice, but writing a silly Python script is much easier.

## Installation

$ python setup.py install

## License

Dumph is licensed under the MIT license.

