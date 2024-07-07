#include <iostream>
#include <algorithm>
#include <vector>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;
    
    vector<int> numbers;
    
    // Extract numbers from the input string
    for (char ch : s) {
        if (ch != '+') {
            numbers.push_back(ch - '0');
        }
    }
    
    // Sort the numbers
    sort(numbers.begin(), numbers.end());
    
    // Print the result
    for (int i = 0; i < numbers.size(); ++i) {
        if (i > 0) cout << '+';
        cout << numbers[i];
    }
    
    cout << endl;
    return 0;
}
