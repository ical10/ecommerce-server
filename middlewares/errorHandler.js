const errorHandler = (err, req, res, next) => {
  if (err) {
    let errors = []

    switch (err.name) {
      case 'AuthError':
        errors.push('Wrong email / password')
        res.status(401).json({ errors })
        break
      case 'BadRequest':
        errors.push('Email / password must be filled')
        res.status(400).json({ errors })
        break
      case 'ResourceNotFound':
        errors.push('Not found')
        res.status(404).json({ errors })
        break
      case 'NoCredentials':
        errors.push('Not authorised')
        res.status(401).json({ errors })
        break
      case 'StockExceeded':
        errors.push('Not enough stock')
        res.status(400).json({ errors })
        break
      case 'SequelizeDatabaseError':
        if (err.message === 'value too long for type character varying(255)') {
          errors.push('Max characters for string exceeded')
          res.status(400).json({ errors })
        }

        if (err.message.split(' ').slice(2).join(' ') === 'is out of range for type integer') {
          errors.push('Number too big')
          res.status(400).json({ errors })
        }
        break
      case 'ConflictError':
        errors = err.errors.map(error => error.message)
        res.status(409).json({ errors })
        break
      case 'JsonWebTokenError':
        errors.push('Invalid credentials')
        res.status(401).json({ errors })
        break
      default:
        errors = err.errors.map(error => error.message)
        res.status(400).json({
          errors
        })
        break
    }
  }
}

module.exports = errorHandler
