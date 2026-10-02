import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

interface Project {
  category: string;
  title: string;
  text: string;
  stat: string;
  image?: string;
  tone: 'cyan' | 'lime' | 'blue';
}

interface Testimonial {
  quote: string;
  name: string;
  career: string;
  initials: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly linkUrl = 'https://ucadlink.framesv.site/';
  readonly facebookUrl = 'https://www.facebook.com/profile.php?id=61567607833578&locale=es_LA';
  readonly instagramUrl = 'https://www.instagram.com/ucadlink/';

readonly benefits: Benefit[] = [
  { icon: 'connect', title: 'CONECTA CON ESTUDIANTES', text: 'Encuentra personas con intereses, habilidades y metas que complementen las tuyas.' },
  { icon: 'participate', title: 'PARTICIPA EN PROYECTOS', text: 'Súmate a proyectos, actividades y oportunidades que convierten tus ideas en acción.' },
  { icon: 'share', title: 'COMPARTE TUS CONOCIMIENTOS', text: 'Comparte lo que sabes, aprende de otros y fortalece el talento de toda la comunidad.' }
];
  readonly projects: Project[] = [
    { category: 'TECNOLOGÍA', title: 'Ideas que conectan', text: 'Equipos multidisciplinarios creando soluciones para retos reales de la comunidad.', stat: 'UCAD Link', tone: 'cyan', image: 'assets/images/referencia-conecta.png' },
    { category: 'COMUNIDAD', title: 'Talento en acción', text: 'Estudiantes que convierten su experiencia universitaria en iniciativas colaborativas.', stat: '', tone: 'blue', image: 'assets/images/proyectos.png' },
    { category: 'INNOVACIÓN', title: 'Comparte y aprende', text: 'Espacios para intercambiar conocimientos, herramientas y nuevas perspectivas.', stat: '', tone: 'lime', image: 'assets/images/EstudiantesComunicaciones.png'}
    
  ];

  readonly testimonials: Testimonial[] = [
    { quote: 'UCAD Link me permite descubrir personas con las mismas ganas de crear y aprender.', name: 'María Fernanda', career: 'Estudiante universitaria', initials: 'MF' },
    { quote: 'La comunidad hace más fácil pasar de una idea a un proyecto con otras personas.', name: 'Carlos Eduardo', career: 'Estudiante universitario', initials: 'CE' },
    { quote: 'Compartir conocimiento aquí se siente como construir algo que nos pertenece a todos.', name: 'Daniela Sofía', career: 'Estudiante universitaria', initials: 'DS' }
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openLink(): void {
    window.location.href = this.linkUrl;
  }
}
