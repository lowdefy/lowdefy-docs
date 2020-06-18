We would like to add an input form with the following fields:

- A name for the meeting.
- Which meeting room should be booked. This should be a selection from a list of meeting rooms.
- The date of the meeting.
- The start and end times for the meeting.

There should also be submit and reset buttons at the bottom of the page.

Copy the following blocks and add them in the card's blocks array.

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
################ -------- Copy from here -------- ################
          - id: meeting_name
            type: TextInput
            properties:
              title: Meeting Name
          - id: meeting_room
            type: Selector
            properties:
              title: Meeting Room
              options: # Set the allowed options
                - Red Room
                - Blue Room
                - Green Room
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
              --span: 6 # Set the size of the button (span 6 of 12 columns)
            properties:
              title: Reset
              block: true # Make the button fill all the space available to it
              type: default # Make the button a plain button
              Icon: ClearOutlined
          - id: submit_button
            type: Button
            style:
              --span: 6
            properties:
              title: Submit
              block: true
              type: primary # Make the button a primary button with color
              Icon: SaveOutlined
```

Refresh your page and you should see something like this: