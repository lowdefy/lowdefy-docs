### `lowdefy.yaml`

```yaml
menus:
  - id: default
    links:
      - id: welcome
        type: MenuLink
        properties:
          icon: HomeOutlined
          title: Home
        pageId: welcome
      - id: booking
        type: MenuLink
        properties:
          icon: CalendarOutlined
          title: Book a meeting
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
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a meeting room
              level: 3
          - id: meeting_name
            type: TextInput
            properties:
              title: Meeting name
          - id: meeting_room
            type: Selector
            properties:
              title: Meeting room
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
              title: Start time
          - id: end_time
            type: DateTimeSelector
            properties:
              title: End time
          - id: reset_button
            type: Button
            layout:
              span: 12 # Set the size of the button (span 12 of 24 columns)
            properties:
              title: Reset
              block: true # Make the button fill all the space available to it
              type: default # Make the button a plain button
              icon: ClearOutlined
          - id: submit_button
            type: Button
            layout:
              span: 12
            properties:
              title: Submit
              block: true
              type: primary # Make the button a primary button with color
              icon: SaveOutlined
```