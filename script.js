
 var media, nota1, nota2, nota3; 
 nota1= prompt ("Primeira nota:") ; 
 nota1= eval (nota1) ; 
 nota2= prompt ("Segunda nota:") ; 
 nota2= eval (nota2) ; 
 nota3= prompt ("Terceira nota:") ; 
 nota3= eval (nota3) ; 
 
 media = (nota1 + nota2 + nota3)/3 ; 
 
 if(nota1 <=3){
 				document.write("Reprovado");
 }else if(nota2 <=3){
 				document.write("Reprovado");
 }else if(nota3 <=3){
 				document.write("Reprovado");		
 }else if (nota1 <=5){
 				document.write("Recuperação Final");
 }else if(nota2 <=5){
 				document.write("Recuperação Final");
 }else if(nota3 <=5){
 				document.write("Recuperação Final");
 }else if(nota1==10){
	 			document.write("Parabéns");
 }else if(nota2==10){
	 			document.write("Parabéns");
 }else if(nota3==10){
	 			document.write("Parabéns, Você foi Aprovado");
 }else if(nota1&&nota2&&nota3 >=7){
	 			document.write("Aprovado por média");
 }else if(nota1||nota2||nota3 <7 & media>=7){
	 			document.write("Aprovado");
 }