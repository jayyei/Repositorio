package mx.com.gm.servicio;

import java.util.List;
import mx.com.gm.dao.IPersonaDAO;
import mx.com.gm.domain.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author mrjay
 */
@Service
public class PersonaServiceImpl implements PersonaService{

    @Autowired
    private IPersonaDAO personaDAO;
    
    @Override
    @Transactional(readOnly = true)
    public List<Persona> listarPersonas() {
        return (List<Persona>) personaDAO.findAll();
    }

    @Override
    @Transactional
    public void guardar(Persona persona) {
        personaDAO.save(persona);
    }

    @Override
    @Transactional
    public void eliminar(Persona persona) {
        personaDAO.delete(persona);
        
    }

    @Override
    @Transactional(readOnly = true)
    public Persona encontrarPersona(Persona persona) {
        return personaDAO.findById(persona.getIdPersona()).orElse(null);
    }
    
}
