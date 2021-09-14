package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"time"
)

const prompt = "and don't type your number in, just press ENTER when ready"

func main() {
	// one way - declare, then assign (two steps)
	// You can also use an underscore by starting a variable name
	// var firstNumber int
	// firstNumber = 2

	// Another way, delcare type and name and assign value
	// var secondNumber = 5

	// one step variable: declare anme, assign value, and let Go figure out the type
	// substraction := 7

	// sed the random number generator
	rand.Seed(time.Now().UnixNano())

	var firstNumber = rand.Intn(8) + 2
	var secondNumber = rand.Intn(8) + 2
	var subtraction = rand.Intn(8) + 2
	var answer = firstNumber*secondNumber - subtraction

	playTheGame(firstNumber, secondNumber, subtraction, answer)

}

func playTheGame(firstNumber, secondNumber, subtraction, answer int) {

	reader := bufio.NewReader(os.Stdin)

	// Display  welcome/ instructions
	fmt.Println("Gues the Number Game")
	fmt.Println("--------------------")
	fmt.Println("")

	fmt.Println("Think of a number between 1 and 10", prompt)
	reader.ReadString('\n')

	// take them through the games
	fmt.Println("Multiply your number by", firstNumber, prompt)
	reader.ReadString('\n')

	fmt.Println("Now multiply the result by", secondNumber, prompt)
	reader.ReadString('\n')

	fmt.Println("Divide the result by the number you originally thought of", prompt)
	reader.ReadString('\n')

	fmt.Println("Now subtract", subtraction, prompt)
	reader.ReadString('\n')

	// give them the answer

	fmt.Println("The answer is", answer)
}
