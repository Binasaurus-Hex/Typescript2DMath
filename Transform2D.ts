import { Vector2 } from './Vector2';

export class Transform2D {
  rotation: number = 0;
  translation: Vector2 = new Vector2(0, 0);
  scale: Vector2 = new Vector2(1, 1);

  public multiply_matrix(m1: number[][], m2: number[][]) {
    let result: number[][] = [];
    for (let j = 0; j < m1.length; j++) {
      result[j] = [];
      for (let k = 0; k < m2[0].length; k++) {
        let sum = 0;
        for (let i = 0; i < m2.length; i++) {
          sum += m2[i][k] * m1[j][i];
        }
        result[j][k] = sum;
      }
    }
    return result;
  }

  private get_rotation_matrix(theta: number): number[][] {
    return [
      [Math.cos(theta), -Math.sin(theta), 0],
      [Math.sin(theta), Math.cos(theta), 0],
      [0, 0, 1],
    ];
  }

  private get_translation_matrix(value: Vector2): number[][] {
    return [
      [1, 0, value.x],
      [0, 1, value.y],
      [0, 0, 1],
    ];
  }

  private get_scale_matrix(value: Vector2): number[][] {
    return [
      [value.x, 0, 0],
      [0, value.y, 0],
      [0, 0, 1],
    ];
  }

  private matrix_product(matricies: number[][][]) {
    let product: number[][] = matricies[matricies.length - 1];
    for (let i = matricies.length - 2; i >= 0; i--) {
      product = this.multiply_matrix(matricies[i], product);
    }
    return product;
  }

  public x_form(vector: Vector2): Vector2 {
    let column_vector = [[vector.x], [vector.y], [1]];

    let transform_matrix = this.matrix_product([
      this.get_scale_matrix(this.scale),
      this.get_translation_matrix(this.translation),
      this.get_rotation_matrix(this.rotation),
    ]);

    let transformed_vector = this.multiply_matrix(
      transform_matrix,
      column_vector
    );

    return new Vector2(transformed_vector[0][0], transformed_vector[1][0]);
  }

  public x_form_inv(vector: Vector2): Vector2 {
    let column_vector = [[vector.x], [vector.y], [1]];

    let transform_matrix = this.matrix_product([
      this.get_rotation_matrix(-this.rotation),
      this.get_translation_matrix(this.translation.mul(-1)),
      this.get_scale_matrix(new Vector2(1,1).div(this.scale)),
    ]);

    let transformed_vector = this.multiply_matrix(
      transform_matrix,
      column_vector
    );

    return new Vector2(transformed_vector[0][0], transformed_vector[1][0]);
  }
}
