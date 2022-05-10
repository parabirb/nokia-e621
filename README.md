# Nokia e621
Nokia e621 is a mirror of e621 designed to be compatible with the built-in browser (Opera Mini) on new Nokia phones.

## Why?
Both e621 and FurAffinity are unusable on the built-in browser. I recently purchased a Nokia 225 4G and my life would be much easier if I was actually able to readily download furry art onto this phone, thus this port.

## Configuration
SSL is not supported. An example of a `config.json` file is as follows:
```json
{
    "port": 8080,
    "options": [
        {
            "name": "e rating",
            "tags": "rating:e order:favcount"
        },
        {
            "name": "q rating",
            "tags": "rating:q order:favcount"
        },
        {
            "name": "s rating",
            "tags": "rating:s order:favcount"
        }
    ]
}
```

Please note the only searches available are those in the `options` property, so pick your searches wisely!

## Usage
1. Install the modules.
2. Write a config.
3. Run it!

It's that simple.

## Security
This was not meant to be secure. There is no input checking. I don't care.