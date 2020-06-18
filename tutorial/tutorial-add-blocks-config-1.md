### `lowdefy.yaml`

```yaml
menus:
  - id: default
    links:
      - id: welcome
        type: MenuLink
        properties:
          Icon: HomeOutlined
          title: Home
        pageId: welcome
      - id: booking
        type: MenuLink
        properties:
          Icon: CalendarOutlined
          title: Book a Meeting
        pageId: booking
pages:
  - id: welcome
    type: PageHeaderMenu
    blocks:
      - id: content_card
        type: Card
        blocks:
          - id: title
            type: Title
            properties:
              content: Hello World
  - id: booking
    type: PageHeaderMenu
    properties:
      title: Book Meeting
    blocks:
      - id: content_card
        type: Card
        style:
          maxWidth: 600px
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a Meeting Room
              level: 3
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