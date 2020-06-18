### Creating a new page

Let's create a page for a form to where users can book a meeting room. Copy the definition of the `booking` page into your `lowdefy.yaml` file:

```
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
################ -------- Copy from here -------- ################
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
################ ------- Copy to here ----------- ################
```