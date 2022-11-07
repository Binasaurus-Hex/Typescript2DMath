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

// convert between arrays and Vector2
let array: number[] = [10,20];
let array_vector: Vector2 = Vector2.from_array(array);
let converted_back: number[] = array_vector.to_array();
```

## Transform2D

```typescript
let transform = new Transform2D();

// rotation, translation, scaling
transform.rotation = Math.PI/2;
transform.translation = new Vector2(10, 20);
transform.scale = new Vector2(2,2);

//transform vector2s
let car_position = new Vector2(10,20);
let transformed_point = transform.x_form(car_position);

// and also the inverse
let original_car_position = transform.x_form_inv(transformed_point);
```