# omo-auto-works-website
OMO Auto Works is a registered mechanic shop business in Jamaica. This is the repository for a simple static site for their business. This project is basically a static site generator. It uses the templating engine nunjucks to generate HTML based on its custom syntax at buildtime (all on server). Only the static files are served to browser.  


I just use this file to track my tasks and note import points I need alot. Development on this project is not paused, but its slower than usual because of other current engagements.


# Tasks
- [ ] Common Data Template
     - [ ] Update values accorss website using this template <Ongoing>
- [ ] Headers
    - [ ] Mobile
        - [ ] Nav links
        - [x] Schedule Button
    - [ ] MD+
        - [ ] Nav links
        - [x] md Header and hero padding x's at breakpoints align
- [ ] Hero
    - [ ] Mobile
        - [x] Schedule/Email Button widen at sm breakpoint
        - [x] remove contact details from section (because adding details bar below video)
        - [ ] email button link
        - [ ] Video
    - [ ] MD+
        - [x] md+ text content size
        - [x] Schedule/Email Button
        - [ ] email button link
        - [ ] Video
    - [x] Contact details Bar
        - [x] Move out to own wrapper in index
        - [x] Apply padding x and breakpoints
        - [x] Theming and spacing
            - [x] font size and mobile and sm
            - [x] text layout change at md breakpoint
            - [x] background and Text color white
- [ ] Services
    - [ ] Update services data structure
    - [x] Title
    - [x] y-padding, top possibily different from bottom
    - [x] Mobile
        - [x] navigation buttons and arrows black
        - [x] article tile constant height issue
    - [x] MD+
- [ ] Our Work
    - [ ] update images data structure
    - [x] Title
     - [ ] padding to buttom of section <Ongoing>
    - [x] Mobile
        - [x] images from data structure
        - [x] carousel feature
    - [x] MD+
        - [x] mobile v md controls conditional
        - [x] md tile centering formula & implementations
- [ ] Start a Conversation
    - [ ] Title
    - [ ] Mobile
    - [ ] MD+
- [ ] FAQ
    - [ ] Title
    - [ ] Mobile
    - [ ] MD+
- [ ] Find Us
    - [ ] Title
    - [ ] Mobile
    - [ ] MD+
- [ ] Footer
    - [ ] Mobile
    - [ ] MD+
- [ ] Post Production tasks
    - [ ] IG Page
    - [ ] Email address
    - [ ] Hero Videos
    - [ ] Google Maps Registrations
    - [ ] Project Post Mortem
        - [ ] Github Page Upload
        - [ ] Project report Readme
        - [ ] Personal Workflow Notes

# z-indices
1. Mobile header-menu wrapper z-50
 1.1 Mobile Header z-50
 1.2 Mobile_menu z-40
2. Mobile hero z-20
 2.1 Content (text) z-20
 2.2 Overlay z-10
 2.3 Video z-0
3. md-up-header z-50
4. med-up-hero z-20
 4.1 Content z-20
 4.2 Overlay z-10
 4.3 Video z-0

# Color Pallete
gray-200 is the primary placeholder
neutral-700 is the secondary placeholder