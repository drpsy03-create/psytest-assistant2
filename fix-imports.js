#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Быстрое исправление импортов...');

// Функция для рекурсивного поиска файлов
function findTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== 'build') {
        results = results.concat(findTsxFiles(fullPath));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  
  return results;
}

// Найти все TypeScript файлы
const tsFiles = findTsxFiles('.');

let fixedFiles = 0;

tsFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Исправляем версионированные импорты
    const fixes = [
      [/@radix-ui\/react-accordion@[\d\.]+/g, '@radix-ui/react-accordion'],
      [/@radix-ui\/react-alert-dialog@[\d\.]+/g, '@radix-ui/react-alert-dialog'],
      [/@radix-ui\/react-aspect-ratio@[\d\.]+/g, '@radix-ui/react-aspect-ratio'],
      [/@radix-ui\/react-avatar@[\d\.]+/g, '@radix-ui/react-avatar'],
      [/@radix-ui\/react-checkbox@[\d\.]+/g, '@radix-ui/react-checkbox'],
      [/@radix-ui\/react-collapsible@[\d\.]+/g, '@radix-ui/react-collapsible'],
      [/@radix-ui\/react-context-menu@[\d\.]+/g, '@radix-ui/react-context-menu'],
      [/@radix-ui\/react-dialog@[\d\.]+/g, '@radix-ui/react-dialog'],
      [/@radix-ui\/react-dropdown-menu@[\d\.]+/g, '@radix-ui/react-dropdown-menu'],
      [/@radix-ui\/react-hover-card@[\d\.]+/g, '@radix-ui/react-hover-card'],
      [/@radix-ui\/react-label@[\d\.]+/g, '@radix-ui/react-label'],
      [/@radix-ui\/react-menubar@[\d\.]+/g, '@radix-ui/react-menubar'],
      [/@radix-ui\/react-navigation-menu@[\d\.]+/g, '@radix-ui/react-navigation-menu'],
      [/@radix-ui\/react-popover@[\d\.]+/g, '@radix-ui/react-popover'],
      [/@radix-ui\/react-progress@[\d\.]+/g, '@radix-ui/react-progress'],
      [/@radix-ui\/react-radio-group@[\d\.]+/g, '@radix-ui/react-radio-group'],
      [/@radix-ui\/react-scroll-area@[\d\.]+/g, '@radix-ui/react-scroll-area'],
      [/@radix-ui\/react-select@[\d\.]+/g, '@radix-ui/react-select'],
      [/@radix-ui\/react-separator@[\d\.]+/g, '@radix-ui/react-separator'],
      [/@radix-ui\/react-sheet@[\d\.]+/g, '@radix-ui/react-sheet'],
      [/@radix-ui\/react-slider@[\d\.]+/g, '@radix-ui/react-slider'],
      [/@radix-ui\/react-slot@[\d\.]+/g, '@radix-ui/react-slot'],
      [/@radix-ui\/react-switch@[\d\.]+/g, '@radix-ui/react-switch'],
      [/@radix-ui\/react-tabs@[\d\.]+/g, '@radix-ui/react-tabs'],
      [/@radix-ui\/react-toast@[\d\.]+/g, '@radix-ui/react-toast'],
      [/@radix-ui\/react-toggle@[\d\.]+/g, '@radix-ui/react-toggle'],
      [/@radix-ui\/react-toggle-group@[\d\.]+/g, '@radix-ui/react-toggle-group'],
      [/@radix-ui\/react-tooltip@[\d\.]+/g, '@radix-ui/react-tooltip'],
      [/class-variance-authority@[\d\.]+/g, 'class-variance-authority'],
      [/lucide-react@[\d\.]+/g, 'lucide-react'],
      [/sonner@[\d\.]+/g, 'sonner'],
      [/cmdk@[\d\.]+/g, 'cmdk'],
      [/recharts@[\d\.]+/g, 'recharts'],
      [/react-day-picker@[\d\.]+/g, 'react-day-picker'],
      [/embla-carousel-react@[\d\.]+/g, 'embla-carousel-react']
    ];
    
    fixes.forEach(([regex, replacement]) => {
      const newContent = content.replace(regex, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.warn(`⚠️ Не удалось обработать ${filePath}: ${error.message}`);
  }
});

console.log(`\n🎉 Исправлено файлов: ${fixedFiles}`);
console.log('✅ Готово к сборке!');