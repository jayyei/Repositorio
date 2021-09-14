// every go program, every file that makes up part of a go program  has to start with a package declaration
package main

import (
	"bufio"
	"fmt"
	"myapp/doctor"
	"os"
	"strings"
)

// The main function can't take any parameters
func main() {
	// var whatToSay string
	// whatToSay = "Hello World again!"

	// store a string in a variable and it figure out what type this is based
	// whatToSay := "Hello World again!"

	// or
	// var whatToSay string = "Hello World again!"
	// sayHelloWorld(whatToSay)

	reader := bufio.NewReader(os.Stdin)

	var whatToSay string = doctor.Intro()

	fmt.Println(whatToSay)

	for {
		fmt.Print("-> ")
		userInput, _ := reader.ReadString('\n')
		userInput = strings.Replace(userInput, "\r\n", "", -1)
		userInput = strings.Replace(userInput, "\n", "", -1)
		if userInput == "quit" {
			break
		} else {
			fmt.Println(doctor.Response(userInput))
		}
	}
}

// func sayHelloWorld(whatToSay string) {
// 	fmt.Println(whatToSay)
// }
