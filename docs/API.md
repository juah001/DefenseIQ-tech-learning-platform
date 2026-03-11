## POST /reviews

Updates spaced repetition state after a card review.

### Body
```json
{
  "rating": "good",
  "current": {
    "interval": 1,
    "easeFactor": 2.5,
    "repetitions": 0
  }
}
