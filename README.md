# Project Backend

A brief description of what this project does and who it's for

| HTTP METHOD	| URL    	| DESCRIPTION                                    	| PROTECTED 	|
|-------------	|---------------	|------------------------------------------------	|---------	|
| GET         	| `/`             	| Home page          	| |
| GET         	| `/registro`    	| Displays a users form to Sign Up 	| |
| POST         	| `/registro`    	| It creates a new user 	| |
| GET         	| `/inicio-sesion` 	| Displays a form to Log In	| |
| POST         	| `/inicio-sesion` 	| The user is logged in 	| |
| POST         	| `/cerrar-sesion` 	| The user is logged out	|  |
| GET         	| `/colaboradores/registro`    	| Displays a partner form to Sign Up 	| X|
| POST         	| `/colaboradores/registro`    	| It creates a new partner 	|X |
| GET         	| `/colaboradores/perfil/:id`             	| It shows the partner's profile          	| X|
| GET         	| `/colaboradores/perfil/:id/editar`             	| The partners can edit its profile with an prefilled form        	|X |
| POST         	| `/colaboradores/perfil/:id/editar`             	| The edited information goes to DataBase         	| X|
| GET         	| `/colaboradores/mis-eventos`             	| Displays the partners own events list         	|X |
| GET         	| `/eventos`             	| Displays all events list         	| |
| GET         	| `/eventos/detalles/:id`    	| Displays the event details 	| |
| POST        	| `/eventos/detalles/:id/asistir` 	| A user can register for an event 	|X |
| POST         	| `/eventos/detalles/:id/comentarios` 	| A user will be able to write a comment 	|X |
| GET         	| `/eventos/detalles/:id/participantes`    	| It will display a list of event participants	| X|
| GET         	| `/eventos/crear`    	| It will creates an event through a form	| X|
| POST         	| `/eventos/crear`    	| It saves the event in the DataBase	|X |
| GET         	| `/eventos/editar/:id` 	| The partners can edit their own events   	|X |
| POST         	| `/eventos/editar/:id` 	| The edited events are saved in the dataBase 	|X |
| POST         	| `/eventos/eliminar/:id` 	| It deletes the event	|X |
| GET         	| `/perfil-usuario/:id`             	| It shows the user's profile         	|X |
| GET         	| `/perfil-usuario/:id/editar`             	| The users can edit its profile with an prefilled form           	|X |
| POST         	| `/perfil-usuario/:id/editar`             	| The edited information goes to DataBase            	|X |
| GET         	| `/mis-eventos`    	|Displays the users events list      	|X |
| GET       	| `/admin` 	|Home page of Admin role 	| X|
| GET        	| `/admin/colaboradores` 	| It shows a partners list 	|X |
| GET        	| `/admin/usuarios` 	| It shows a users list 	|X |

