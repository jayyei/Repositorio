package sanchez.jay.eventos;

import java.awt.Color;
import java.awt.event.ActionEvent;

import javax.swing.AbstractAction;
import javax.swing.Action;
import javax.swing.ActionMap;
import javax.swing.InputMap;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.KeyStroke;

public class VariasFuentes {
	
	public static void main(String[] args) {
		MarcoFuentes mimarco = new MarcoFuentes();
		mimarco.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

}


class MarcoFuentes extends JFrame{
	
	public MarcoFuentes() {
		setBounds(600,300,500,350);
		add(new LaminaFuentes());
		setVisible(true);
	}
}

class LaminaFuentes extends JPanel{
	
	public LaminaFuentes() {
		
		/*JButton botonAzul = new JButton("Azul");
		JButton botonRojo = new JButton("Rojo");
		JButton botonVerde = new JButton("Verde");
		add(botonAzul);
		add(botonRojo);
		add(botonVerde);*/
		
		EventoColorFondo colorAzul = new EventoColorFondo("Azul", Color.BLUE);
		EventoColorFondo colorRojo = new EventoColorFondo("Rojo", Color.RED);
		EventoColorFondo colorVerde = new EventoColorFondo("Verde", Color.GREEN);
		
		JButton botonAzul = new JButton(colorAzul);
		JButton botonRojo = new JButton(colorRojo);
		JButton botonVerde = new JButton(colorVerde);
		add(botonAzul);
		add(botonRojo);
		add(botonVerde);
	
		InputMap mapaEntrada = getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW);
		KeyStroke teclaAzul = KeyStroke.getKeyStroke("ctrl A");
		KeyStroke teclaRojo = KeyStroke.getKeyStroke("ctrl R");
		KeyStroke teclaVerde = KeyStroke.getKeyStroke("ctrl V");
		mapaEntrada.put(teclaAzul, "Fondo azul");
		mapaEntrada.put(teclaRojo, "Fondo rojo");
		mapaEntrada.put(teclaVerde, "Fondo verde");
		ActionMap mapaAccion = getActionMap();
		mapaAccion.put("Fondo azul", colorAzul);
		mapaAccion.put("Fondo rojo", colorRojo);
		mapaAccion.put("Fondo verde", colorVerde);
	}
	
	
	private class EventoColorFondo extends AbstractAction{
		
		public EventoColorFondo(String nombre, Color colorFondo) {
			putValue(Action.NAME, nombre);
			putValue(Action.SHORT_DESCRIPTION, "Pone la lamina de color "+ nombre );
			putValue("Color", colorFondo);
		}

		@Override
		public void actionPerformed(ActionEvent e) {
			Color color = (Color) getValue("Color");
			setBackground(color);
			System.out.println("El boton presionado fue " + getValue(Action.NAME) + " Descricpion " 
					+ getValue(Action.SHORT_DESCRIPTION));
			
		}
		
	}
}

