export class Vector2 {

    constructor(public x: number, public y: number){}
  
    public static from_array(array: number[]): Vector2 {
      return new Vector2(array[0],array[1]);
    }
  
    public to_array(): number[] {
      return [this.x,this.y];
    }
  
    public add(other: Vector2): Vector2 {
      return new Vector2(this.x + other.x, this.y + other.y);
    }
  
    public sub(other: Vector2): Vector2 {
      return this.add(other.mul(-1));
    }
  
    public mul(other: Vector2 | number): Vector2 {
      if(other instanceof Vector2){
        return new Vector2(this.x * other.x, this.y * other.y);
      }
      else{
        return new Vector2(this.x * other, this.y * other);
      }
    }
  
    public div(other: Vector2 | number): Vector2 {
      if(other instanceof Vector2){
        return new Vector2(this.x / other.x, this.y / other.y);
      }
      else{
        return new Vector2(this.x / other, this.y / other);
      }
    }
  
    public length(): number {
      return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
  
    public distance_to(other: Vector2): number {
      return other.sub(this).length();
    }
  
    public normalized(): Vector2 {
      let length = this.length();
      return new Vector2(this.x / length, this.y / length);
    }
  
    public angle(): number {
      return Math.atan2(this.y, this.x);
    }
  }
  