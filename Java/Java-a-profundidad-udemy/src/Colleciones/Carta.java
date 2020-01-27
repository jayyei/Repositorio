package Colleciones;

public class Carta {

	public static enum Cara {As, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve, Diez, Joker, Reina, Rey};
	public static enum Palo {Bastos, Diamantes, Corazones, Espadas};
	
	private final Cara cara;
	
	public Cara getCara() {
		return cara;
	}

	public Palo getPalo() {
		return palo;
	}

	@Override
	public String toString() {
		return String.format("%s de %s", cara, palo);
	}

	private final Palo palo;
	
	public Carta (Cara cara, Palo palo) {
		this.cara = cara;
		this.palo = palo;
	}
}
