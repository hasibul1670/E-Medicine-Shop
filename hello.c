#include <stdio.h>

int main() {
    int rows = 3;
    int columns = 2;

    for (int i = 1; i <= rows;   i++) {

      for (int j = 1; j <= columns;  j++)
         {
            printf("* ");
        }
        printf("\n");

    }

    return 0;
}
