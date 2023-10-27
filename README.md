# Numerology Calculator Script

This repository contains a Google Apps Script for calculating numerology numbers from a given birthday. The script is designed to be easy to integrate and use, especially for those working with spreadsheets where numerology calculations are required.

## Overview

The script, `Numelogy.gs`, provides a custom function named `Numelogy`, which takes a numeric input representing a birthday and returns the numerology number. It handles single values as well as arrays, and it accounts for master numbers in numerology.

## Features

- **Single and Array Input**: Can process both individual birthday numbers and arrays of numbers.
- **Master Numbers**: Recognizes and correctly handles master numbers (11, 22, 33).
- **Recursive Calculation**: For numbers that are not master numbers and have more than one digit, the script calculates recursively to reduce it to a single digit.

## How to Use

1. **Add Script to Your Project**: Copy `Numelogy.gs` into your Google Apps Script project.
2. **Function Call**: Use the function in your spreadsheet or script by calling `Numelogy(input)`.
   - Example: `=Numelogy("19850423")` or `=Numelogy(A2)` where A2 contains the birthday.

## Requirements

- Google Account with access to Google Sheets and Google Apps Script.

## Contributions

Contributions to this script are welcome. Please feel free to submit issues and pull requests for improvements, bug fixes, or feature additions.

## License

This script is released under the [MIT License](LICENSE).
