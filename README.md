# bloc-promise

Bloc Promise is the invoker function of a bloc which provides a promise api.

This enables you to use all of your blocs using a promise api.

## Usage

    const exec = require('bloc-promise')(bus)

    exec('GEOCODE', { address: '1234 Main Street', city: 'Anytown', state: 'SC', zip: '29464'})
      .then(res => console.log(res))
      .catch(foo => console.log(foo))


## bloc-promise takes three inputs:

* adapter/bus - this adpater bus, must support .on, once, and .emit functions
* bloc type - this is a string that is the bloc type that is used to invoke the bloc
* payload - this is the data that is sent to the bloc as input.

### returns

The bloc-promise will always return an object as a result.
