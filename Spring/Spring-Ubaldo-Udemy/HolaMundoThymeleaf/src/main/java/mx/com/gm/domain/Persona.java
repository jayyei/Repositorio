/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.gm.domain;

import lombok.Data;

/**
 *
 * @author mrjay
 */
@Data  //Esta poderosa herramienta crea los getters, setter equals y hascode de este tipo de modelo
public class Persona {
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
}
