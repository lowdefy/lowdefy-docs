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
      title: Book meeting # Where is this title shown (tab title?), and is compulsory?
    layout:
      contentJustify: center # Center the contents of the page
    blocks:
      - id: content_card
        type: Card
        layout:
          size: 800 # Set the size of the card so it does not fill the full screen
          contentGutter: 16 # Make a 16px gap between all blocks in this card
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a meeting room # Change the title on the page
              level: 3 # Make the title a little smaller (an html `<h3>`).
```
