### `lowdefy.yaml`

```yaml
pages:
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
              content: Book a Meeting Room
              level: 3
          - id: meeting_name
            required: true
            type: TextInput
            properties:
              title: Meeting Name
          - id: number_of_attendees
            type: ButtonSelector
            required: true
            properties:
              title: Number of Attendees
              options:
                - 2 - 3
                - 4 - 7
                - 8 - 12
          - id: meeting_room
            type: Selector
            required: true
            properties:
              title: Meeting Room
              options:
                - Meeting Room 1
                - Meeting Room 2
                - Meeting Room 3
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
              title: Start Time
          - id: end_time
            type: DateTimeSelector
            required: true
            properties:
              title: End Time
          - id: reset_button
            type: Button
            style:
              --span: 3
            properties:
              title: Reset
              block: true
              type: default
              Icon: ClearOutlined
            actions:
              onClick:
                - id: reset
                  type: reset()
          - id: submit_button
            type: Button
            style:
              --span: 9
            properties:
              title: Submit
              block: true
              type: primary
              Icon: SaveOutlined
            actions:
              onClick:
                - id: validate
                  type: validate()
```