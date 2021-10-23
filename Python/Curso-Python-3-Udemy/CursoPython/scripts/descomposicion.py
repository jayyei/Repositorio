#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Dec 29 22:44:49 2020

@author: jay
"""

import sys

if(len(sys.argv)>0):
    entrada = sys.argv[1]
    mapa = {}
    for index, element   in enumerate(entrada):
        mapa[index] = element 
    for key, value in mapa.items():
        print("{value:0{key}d}".format(value=int(value), key=4-key), end='')           
        print("0"*key)           
else:
    print("Asi no se utiliza este script, por favor considera")
    print("python3 descomposicion.py 12234")
    