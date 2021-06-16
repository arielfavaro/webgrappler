# WebGrappler
# Do not use this!!! Yet...

A simple stupid frontend track event emitter

## Usage
Configure your endpoint
```javascript
WebGrappler.config.endpoint = '/path-to-your-api'
```

Trigger event

It will perform a POST request
```javascript
WebGrappler.track('page_view', { your_data: value, rest});
```

