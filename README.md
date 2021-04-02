# Create env file JavaScript Github action

This action stores selected environment variables into `.env` file.

## Inputs

### `variables`

**Required** The list of environment variables you want to select and store with their values into `.env` file.

## Outputs

No outputs

## Example usage

```yml
- name: Create env file
  uses: jakubkoci/create-env-file@v1
  with:
    variables: 'API_URL, API_TOKEN'
```
