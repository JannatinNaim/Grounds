let x: i32 = 42069;
let pair: (char, i32) =('a', 69);

let (a, b) = pair;
assert!(a, 'a');
assert!(b, 69);

let v = vec![1,2,3,4,5,6,7,8].iter().map(|x| x + 3).fold(0, |x, y| x + y);

fn greet() {
    println!("Heyo! How's it going?");
}

fn numbers() -> i32 {
    let x: char = "a";
    {
        let x: i32 = 420;
        println!("{}", x);
    }
    println!("{}", x);
    let y: i32 = 666;
    return y;
}

let g = {
    let a = 1;
    let b = 2;
    a + b;
}

fn rand() -> i32 {
    4
}

let least = std::cmp::min(1,2,3,4,5);

use std::cmp::min;

least = min(6,7,8,9);
