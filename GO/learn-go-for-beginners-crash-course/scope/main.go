package main

// import (
// 	"fmt"
// 	"myapp/packageone"
// )
// This is a package level variable
// var one = "One"

import "myapp/packageone"

var myVar string = "This is a package level variable"
func main()  {
	// var somethingElse = "this is a block level variable"
	// fmt.Println(somethingElse)
	// myFunc()

	// newString := packageone.PublicVar
	// fmt.Println("From packageone:", newString)

	var blockVar string = "this is the block level variable"

	packageone.PrintMe(myVar, blockVar, packageone.PackageVar)

}

// func myFunc() {
// 	// var one = "the number one"
// 	fmt.Println(one)
// }