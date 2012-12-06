Checklistr is a service that lets users run through checklists,
following the Checklist Manifesto.

## Product

* A checklist is a sequence of items that are either checked or explicitly skipped.
* Running a checklist creates an instance of a checklist-run, which has a name and the status of each item in the checklist.

## Architecture

* Simple hapi/node.js/redis web site.

## v1

One or two fixed templates, output is full text of answers, no data storage.

## v2

Create and share templates.

## v3

Store answers and provide short URL.