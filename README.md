# usage

## Vector2

### example

```typescript
let car_position = new Vector2(10,20);
let human_position = new Vector2(5,5);

let translation = car_position.sub(human_position);

let direction = translation.normalized();

// multiplication supports both integers and other vectors
let movement = direction.mul(2);
let scaled_car_position = car_position.mul(translation);


let distance: number = translation.length();
let distance_to: number = car_position.distance_to(human_position);

// should be the same
if(distance != distance_to){
    console.log("this isnt possible!!!");
}

// angles in radians
let direction_angle = direction.angle();

```

## Transform2D