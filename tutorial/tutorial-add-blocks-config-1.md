### `lowdefy.yaml`

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
              --span: 9 # Set the size of the button (span 9 of 12 columns)
            properties:
              title: Submit
              block: true
              type: primary # Make the button a primary button with color
              Icon: SaveOutlined
```