#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Dec 29 22:28:15 2020

@author: jay
"""

import sys

if(len(sys.argv) > 1):
    for fila in range(int(sys.argv[1])):
        print("")
        for columna in range(int(sys.argv[2])):
            print("*", end="")
else:
    print("Error, faltan argumentos por favor considere lo siguiente")
    print("Modo de ejecucion: python tabla.py 3 3")
    