# node-home-automation
I had been wanting to learn Node JS for a while and decided to start making my own home automation solution for certain things around here.

The first module to be created will be an abstraction of how Sony Bravia TVs receive requests. Other than turning them on (which uses a WOL packet), all other functions work by receiving XML through a POST. Normally sending this data wouldn't be a problem, but more modern Bravias have a basic authentication system in place (more [here](https://github.com/breunigs/bravia-auth-and-remote)).

Having that data across different devices is a pain, especially to send XML all over the place along with a proper auth cookie so I made it such that the central server keep it instead.