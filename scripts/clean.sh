#!/bin/bash

# Script para limpeza completa do projeto
echo "🧹 Limpando cache e dependências..."

# Parar processos do Next.js
pkill -f "next dev" 2>/dev/null || true

# Limpar cache
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo

# Reinstalar dependências
echo "📦 Reinstalando dependências..."
npm install

# Build limpo
echo "🔨 Executando build limpo..."
npm run build

echo "✅ Limpeza concluída! Execute 'npm run dev' para iniciar."
