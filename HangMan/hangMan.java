import java.util.*;

public class hangMan {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        Random random = new Random();

        // Declaration of the Linked List Object to hold the words
        LinkedList listy = new LinkedList();

        // Filling the Linked List with words via a function
        fillList(listy);


        // Boolean to keep track of the games state (game is over or not)
        boolean gameOver = false;

		/*
		  Main Loop for the game to keep running
		  until the boolean "gameOver" changes to true
        */
        while (!gameOver) {
            System.out.println();
            System.out.println("Welcome to Hangman for Programming Languages!!");
            System.out.println("Can you guess the programming language??");

            // Choosing a random word from the Linked List
            String word = listy.chooseRandomWord();
            System.out.println("The word has " + word.length() + " characters");

            // A character array to store the word using underscores (E.g the word hello will be "_ _ _ _ _" )
            char[] randomWord = word.toCharArray();
            // The number of guesses the player has initially
            int amountGuesses = randomWord.length + 3;

            // A char array to keep track of player guesses when they guess a correct character
            char[] playerGuess = new char[randomWord.length];

            // Filling the underscores  array with character '_'
            for (int i = 0; i < playerGuess.length; i++) {

                playerGuess[i] = '_';
            }


            // A boolean to keep track of if the word was guessed or not
            boolean wordGuessed = false;
            // The amount of tries the player has left. Increases by 1 with each guess
            int tries = 0;


            // A while loop that keeps iterating while the player has guesses and the word is not guessed yet
            while (!wordGuessed && tries != amountGuesses) {


                // Print array with underscores
                printArray(playerGuess);
                // Print amount of tries left
                System.out.println("You have " + (amountGuesses - tries) + " tries remaining");

                // Prompts the user for a guess (a character) then increases the number tries by one
                System.out.println("Enter a character: ");
                String input = scan.nextLine();
                tries++;


                // If, else if and else statements to execute, depending what the user inputs

                // End the game if guess is '-'
                if (input.charAt(0) == '-') {

                    gameOver = true;
                    wordGuessed = true;

                }

                // If the user guesses the word then gameOver and the user wins
                else if (input.equalsIgnoreCase(word)) {
                    gameOver = true;
                    wordGuessed = true;
                    System.out.println("The word was " + word + ". Congratulations you Won!!");

                }

                /*
                Else its a guess, so check for the character in the random word
                When you find it then change the underscore to the character guesses
                */
                else
                {

                    for (int i = 0; i < randomWord.length; i++) {

                        if (randomWord[i] == input.charAt(0)) {

                            playerGuess[i] = input.charAt(0);

                        }


                    }


                    // Check if the word is guessed and change the boolean accordingly
                    if (isthewordguessed(playerGuess)) {

                        wordGuessed = true;
                        System.out.println("The word was " + word);
                        System.out.println("Congratulations you win!");

                    }


                }

            }

            // If the word is not guessed then you ran out of tries so thats a loss and a game over :(
            if(!wordGuessed){

                System.out.println("You ran out of tries");
                System.out.println("The word was " + word);
            }

            // Ask to play another game
            System.out.println("Play another game? (yes/no)");
            String playAgain = scan.nextLine();

            // If the user inputs no then end the program
            if(playAgain.equalsIgnoreCase("no")){

                gameOver = true;
            }
            // Else start another game of hangman
            else{

                gameOver = false;

            }

        }
        scan.close();
        System.out.println("Game over");
        System.out.println("Thanks for playing!");


    }
    /* 
    This function prints out an array
    @param char [] array, this is the array of blank spaces and characters that have been guessed
    */
    public static void printArray(char[] array) {

        for (int i = 0; i < array.length; i++) {

            System.out.print(array[i]);
        }
        System.out.println();
    }

    /* 
    We check to see if all characters of the word have been found
    @param char [] array, this is the array of characters of the word to be guessed
    @return boolean which indicates whether the word has been guessed correctly or not
    */
    public static boolean isthewordguessed(char[] array) {


        for (int j = 0; j < array.length; j++) {

            if (array[j] == '_') {
                return false;

            }

        }
        return true;

    }
    	/*
	Fill the linked list with words
	@param listy, this is the linked list that hold the dictionary of words that the computer can pick
	*/
	public static void fillList(LinkedList listy){

        listy.insert("javascript");
        listy.insert("kotlin");
        listy.insert("c++");
        listy.insert("java");
        listy.insert("python");
        listy.insert("c#");
        listy.insert("swift");
    }

}


// Linked List Object
class LinkedList {
    Random random = new Random();

    // Head is null by default
    Node head = null;
    int size;


    /*
    Insert a node. Automatically the first one is the head and others follow
    @param data, this is the piece of data to be added to the linked list
    */
    public void insert(String data){

        Node node = new Node();
        node.data = data;
        node.next = null;

        // If head is null then insert node into head
        if(head == null){
            head = node;

        }
        // Else insert node to next spot of previous node
        else{

            Node n = head;
            while(n.next != null){

                n = n.next;

            }
            n.next = node;
        }

    }

    // Check if the Linked lIst is empty
    public boolean isEmpty( ){
        return (head == null);
    }

    // Return the Linked Lists length
    public int listSize() {

        size = 1;

        Node node = head;
        while(node.next != null){


            size += 1;
            node = node.next;
        }

        return size;
    }

    // Print the Linked list's contents
    public void printList(){

        Node node = head;




        while(node != null){

            System.out.println(node.data);
            node = node.next;
        }
    }

    /*
     Choose a random element in the Linked list and use that as
     the random word for the hangman game
    */
    public String chooseRandomWord(){

        int r = random.nextInt(listSize());
        Node n = head;

        for(int count = 1; count <= r; count++){

            n = n.next;


        }

        return n.data;
    }
}
// Node Object
class Node {


    // A node has a next node and data attached to it
    String data;
    Node next;


}

