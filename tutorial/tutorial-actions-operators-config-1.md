### `lowdefy.yaml`

```yaml
pages:
  - id: booking
    type: PageHeaderMenu
    properties:
      title: Book meeting
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
            required: true
            type: TextInput
            properties:
              title: Meeting name
          - id: number_of_attendees
            type: ButtonSelector
            required: true
            properties:
              title: Number of attendees
              options:
                - 2 - 3
                - 4 - 7
                - 8 - 12
          - id: meeting_room
            type: Selector
            required: true
            properties:
              title: Meeting room
              options:
                - Red Room
                - Blue Room
                - Green Room
                - Boardroom
            validate:
              - message: The boardroom cannot be booked for meetings with less than 8 attendees.
                status: warning
                pass:
                  _or:
                    - _eq:
                        - _state: number_of_attendees
                        - 8 - 12
                    - _not:
                        _eq:
                          - _state: meeting_room
                          - Boardroom          

          - id: date
            type: DateSelector
            required: true
            properties:
              title: Date
          - id: start_time
            type: DateTimeSelector
            required: true
            properties:
              title: Start time
          - id: end_time
            type: DateTimeSelector
            required: true
            properties:
              title: End time
          - id: reset_button
            type: Button
            layout:
              span: 12
            properties:
              title: Reset
              block: true
              type: default
              icon: ClearOutlined
            actions:
              onClick:
                - id: reset
                  type: Reset
          - id: submit_button
            type: Button
            layout:
              span: 12
            properties:
              title: Submit
              block: true
              type: primary
              icon: SaveOutlined
            actions:
              onClick:
                - id: validate
                  type: Validate
```