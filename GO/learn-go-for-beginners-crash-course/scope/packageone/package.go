package packageone

import "fmt"

// // it's only available inside this package
// var privateVar = "I am private"

// // with Capital letter, this variable is available out of this package
// var PublicVar = "I am public (or exported)"

// func notExported() {}

// func Exported() {}

var PackageVar string = "This is a package level variable in package one"

func PrintMe(myVar, blockVar, PackageVar string) {
	fmt.Println(myVar, blockVar, PackageVar)
}