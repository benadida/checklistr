Checklistr is a service that lets users invoke a checklist widget on any web page, fill it out, and integrate the results into the web page input form. For example, in a github pull request, a user could invoke the Checklistr bookmarklet, fill out the checklist, and auto-dump the result in the pr comment stream.

## Architecture

Bookmarklet or built-in link click brings up a light box checklist keyed by tiny-identifier. Ui is served in light boxed I iframe. Resulting text is passed back to parent frame via post message. Result is then pasted into current text area. Result may be chunk of text or URL to results.

## v1

One or two fixed templates, output is full text of answers, no data storage.

## v2

Create and share templates.

## v3

Store answers and provide short URL.