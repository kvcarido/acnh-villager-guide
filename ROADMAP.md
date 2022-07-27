> Work in progress...

### Layout & Styling

#### Colors
- light-green: #88C9A2;
- medium-green: #5BAB87;
- dark-green: #1F7D74;
- super-pale-yellow: #FDFAD8;
- pale-yellow: #F8EEBC;
- golden-yellow: #FCDF6F;
- dark-golden-yellow: #F2D263;
- light-brown: #936B27;
- light-green: #88C9A2

- [ ] Create `inputs` for users
    - birth month
    - birth day
- [ ] Draft Villager card / display box
- [x] Figure out color theme (use ACNH website)
- [ ] Find Google Font to use
- [ ] Start building out CSS styles
- [ ] Create dropdown menu to filter using `personality`


### Functionality
- [x] Originally started with ACNH API since it didn't require a key, but switched to Nookipedia API
    - [x] Refactor getFetch()
- [ ] Figure out how to _not_ publish my API key to the world...
    - start working with Node, so about to use `dotenv` package?
    - nodemon?
- [ ] User birthday input
    - [ ] for `month` input, convert month word to number
    - [ ] parse user input for `month` and `date` as data for API call
- [ ] Disable button after clicking
    - [ ] backtrack functionality used in last project
    - [ ] create `.disabled` in CSS


### Categories
> Brain dump, come back to this later

#### Personality
    - lazy
    - jock
    - cranky
    - smug
    - normal
    - peppy
    - snooty
    - sisterly

#### data[random]
    - name
    - birthday_month
    - birthday_day
    - image_url
    - personality
    - quote
    - species