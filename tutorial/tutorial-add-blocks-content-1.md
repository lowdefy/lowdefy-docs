### Updating the Page

Lets create a form to allow users to book a meeting room. First, let's change our hello page into a booking page - replace the contents of your `lowdefy.yaml` file with this:

```yaml
pages:
  - id: booking # Change the page id from 'hello' to 'booking'
    type: PageHeaderMenu
    properties:
      title: Book Meeting # Add a title which appears in the browser tab (the title in the html `<head>`)
    blocks:
      - id: content_card
        type: Card
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a Meeting Room # Change the title on the page
              level: 3 # Make the title a little smaller (an html `<h3>`).
```

Go to `app-id.lowdefy.com/booking` and make sure your changes are there.

### Adding a Form

The input form we would like to add on this page should have the following fields:

- A name for the meeting.
- Which meeting room should be booked. This should be a selection from a list of meeting rooms.
- The date of the meeting.
- The start and end times for the meeting.

There should also be submit and reset buttons at the bottom of the page.

Copy the following blocks and add them in the card's blocks array (YAML uses indentation to indicate nesting, so it is important that the indentation of the blocks is correct - at the same level as the title).

```yaml
pages:
  - id: booking
    # ...
    blocks:
      - id: content_card
        # ...
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a Meeting Room # Change the title on the page
              level: 3 # Make the title a little smaller (an html `<h3>`).
##################################################################
################ -------- Copy from here -------- ################
##################################################################
          - id: meeting_name
            type: TextInput
            properties:
              title: Meeting Name
          - id: meeting_room
            type: Selector
            properties:
              title: Meeting Room
              options: # Set the allowed options
                - Meeting Room 1
                - Meeting Room 2
                - Meeting Room 3
                - Boardroom
          - id: date
            type: DateSelector
            properties:
              title: Date
          - id: start_time
            type: DateTimeSelector
            properties:
              title: Start Time
          - id: end_time
            type: DateTimeSelector
            properties:
              title: End Time
          - id: reset_button
            type: Button
            style:
              --span: 3 # Set the size of the button (span 3 of 12 columns)
            properties:
              title: Reset
              block: true # Make the button fill all the space available to it
              type: default # Make the button a plain button
              Icon: ClearOutlined
          - id: submit_button
            type: Button
            style:
              --span: 9
            properties:
              title: Submit
              block: true
              type: primary # Make the button a primary button with color
              Icon: SaveOutlined
```

Refresh your page and you should see something like this: